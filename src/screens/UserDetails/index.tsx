import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { User } from '../../types/user.types';
import { UserModule } from '../../services/UserNativeService';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetails'>;

const UserDetailsScreen = ({ route }: Props) => {
  const { userId } = route.params;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await UserModule.getUserById(userId);
      setUser(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.loader}>
        <Text>No user found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <Text style={styles.name}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.subText}>
          {user.age} yrs • {user.gender}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📞 Contact</Text>
        <Text style={styles.cardItem}>📧 {user.email}</Text>
        <Text style={styles.cardItem}>📱 {user.phone}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📍 Address</Text>
        <Text style={styles.cardItem}>
          {user.address.city}, {user.address.state}
        </Text>
        <Text style={styles.cardItem}>{user.address.country}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏢 Company</Text>
        <Text style={styles.cardItem}>{user.company.name}</Text>
      </View>
    </ScrollView>
  );
};

export default UserDetailsScreen;
