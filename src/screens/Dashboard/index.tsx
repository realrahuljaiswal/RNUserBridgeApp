import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  Text,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { User, UserListResponse } from '../../types/user.types';
import { UserModule } from '../../services/UserNativeService';
import UserCard from '../../components/UserCard/UserCard';
import Dropdown from '../../components/Dropdown/Dropdown';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const LIMIT = 10;

const DashboardScreen = ({ navigation }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Search
  const [searchText, setSearchText] = useState('');

  // Filter panel
  const [showFilters, setShowFilters] = useState(false);

  // Applied filters
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Temp selections
  const [tempAge, setTempAge] = useState<number | null>(null);
  const [tempCity, setTempCity] = useState<string | null>(null);
  const [tempState, setTempState] = useState<string | null>(null);
  const [hasMoreData, setHasMoreData] = useState(true);


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
  if (loading || !hasMoreData) return;

  try {
    setLoading(true);
    const response = (await UserModule.getUsers(
      LIMIT,
      skip
    )) as UserListResponse;

    if (response.users.length < LIMIT) {
      setHasMoreData(false);
    }

    setUsers(prev => [...prev, ...response.users]);
    setSkip(prev => prev + LIMIT);
  } catch (e) {
    console.error(e);
  } finally {
    setLoading(false);
  }
};


  const onRefresh = async () => {
  try {
    setRefreshing(true);
    setUsers([]);
    setSkip(0);
    setHasMoreData(true);

    const response = (await UserModule.getUsers(
      LIMIT,
      0
    )) as UserListResponse;

    if (response.users.length < LIMIT) {
      setHasMoreData(false);
    }

    setUsers(response.users);
    setSkip(LIMIT);
  } catch (e) {
    console.error(e);
  } finally {
    setRefreshing(false);
  }
};

  const ageOptions = Array.from(
    new Set(users.map(u => u.age))
  )
    .sort((a, b) => a - b)
    .map(a => `${a}+`);

  const cityOptions = Array.from(
    new Set(users.map(u => u.address.city))
  ).sort();

  const stateOptions = Array.from(
    new Set(users.map(u => u.address.state))
  ).sort();

  const filteredUsers = users.filter(user => {
    const fullName =
      `${user.firstName} ${user.lastName}`.toLowerCase();

    const matchesSearch =
      fullName.includes(searchText.toLowerCase());

    const matchesAge =
      selectedAge === null || user.age >= selectedAge;

    const matchesCity =
      selectedCity === null ||
      user.address.city === selectedCity;

    const matchesState =
      selectedState === null ||
      user.address.state === selectedState;

    return (
      matchesSearch &&
      matchesAge &&
      matchesCity &&
      matchesState
    );
  });

  const renderItem = useCallback(
    ({ item }: { item: User }) => (
      <UserCard
        user={item}
        onPress={() =>
          navigation.navigate('UserDetails', {
            userId: item.id,
          })
        }
      />
    ),
    [navigation]
  );

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TextInput
          placeholder="Search by name"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />

        <Text
          style={styles.filterButton}
          onPress={() => setShowFilters(!showFilters)}
        >
          Filter
        </Text>
      </View>

      {showFilters && (
        <View style={styles.filterPanel}>
          <Text style={styles.filterTitle}>Filter Users</Text>

          <Dropdown
            placeholder="Select Age"
            options={ageOptions}
            selectedValue={
              tempAge !== null ? `${tempAge}+` : null
            }
            onSelect={value =>
              setTempAge(
                value ? Number(value.replace('+', '')) : null
              )
            }
          />

          <View style={styles.spacer} />

          <Dropdown
            placeholder="Select City"
            options={cityOptions}
            selectedValue={tempCity}
            onSelect={setTempCity}
          />

          <View style={styles.spacer} />

          <Dropdown
            placeholder="Select State"
            options={stateOptions}
            selectedValue={tempState}
            onSelect={setTempState}
          />

          <View style={styles.filterActions}>
            <Text
              style={styles.applyBtn}
              onPress={() => {
                setSelectedAge(tempAge);
                setSelectedCity(tempCity);
                setSelectedState(tempState);
                setShowFilters(false);
              }}
            >
              Apply
            </Text>

            <Text
              style={styles.clearBtn}
              onPress={() => {
                setTempAge(null);
                setTempCity(null);
                setTempState(null);
                setSelectedAge(null);
                setSelectedCity(null);
                setSelectedState(null);
                setShowFilters(false);
              }}
            >
              Clear
            </Text>
          </View>
        </View>
      )}

      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={fetchUsers}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListFooterComponent={
          loading ? <ActivityIndicator /> : null
        }
        ListEmptyComponent={
          !loading ? (
            <Text style={styles.emptyText}>
              No users found
            </Text>
          ) : null
        }
      />
    </View>
  );
};

export default DashboardScreen;
