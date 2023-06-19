import RegularText from '@components/Texts/RegularText';
import { colors } from '@src/utils/colors';
import React, { useState } from 'react';
import { FlatList, Pressable, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';

const list = [
    'Car Parking',
    'GYM & Fitness',
    'Wi-fi',
    'Restaurant',
    'Laundry',
    'Garden',
    'Camera',
    'Sport Center',
];

type ItemProps = {
    item: string;
    onPress?: () => void;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
};

const Item = (props: ItemProps) => {
    return (
        <Pressable
            onPress={props.onPress}
            style={{
                ...styles.item,
                backgroundColor: props.backgroundColor,
            }}>
            <RegularText>{props.item}</RegularText>
        </Pressable>
    );
};

export default function Facility(): React.ReactElement {
    const [selected, setSelected] = useState<Array<string>>([]);

    const handleSelect = (item: string) => {
        const isContain = selected.includes(item);

        if (isContain) {
            setSelected(selected.filter(i => i != item));
        } else {
            setSelected([...selected, item]);
        }
    };

    return (
        <View style={styles.container}>
            {list.map((item, index) => {
                const backgroundColor = selected.includes(item) ? '#98b2db' : '#DEEAFD';

                return (
                    <Item
                        key={`facilities-${index}`}
                        item={item}
                        onPress={() => handleSelect(item)}
                        backgroundColor={backgroundColor}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
        flexWrap: 'wrap',
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: colors.neutral,
        borderRadius: 8,
        borderColor: '#DEEAFD',
        borderWidth: 1,
    },
});
