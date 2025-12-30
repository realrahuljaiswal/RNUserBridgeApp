import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import styles from './styles';

interface DropdownProps<T> {
  placeholder: string;
  options: T[];
  selectedValue: T | null;
  onSelect: (value: T | null) => void;
}

function Dropdown<T extends string | number>({
  placeholder,
  options,
  selectedValue,
  onSelect,
}: DropdownProps<T>) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.valueText}>
          {selectedValue ?? placeholder}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.modal}>
            <FlatList
              data={options}
              keyExtractor={(item, index) =>
                `${item}-${index}`
              }
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onSelect(item);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

export default Dropdown;
