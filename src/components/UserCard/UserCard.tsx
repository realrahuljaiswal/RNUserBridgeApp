import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { User } from '../../types/user.types';
import styles from './UserCard.styles';

interface Props {
  user: User;
  onPress: () => void;
}

const UserCard = ({ user, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.age}>Age: {user.age}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
