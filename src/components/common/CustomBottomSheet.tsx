
import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { COLORS, FONTS, icons } from '../../constants';
import RBSheet from 'react-native-raw-bottom-sheet';

interface Props {
    isBottomSheetOpen: boolean;
    setIsBottomSheetOpen: (isOpen: boolean) => void;
    bottomSheetRef: React.RefObject<RBSheet>;
    years: Item[];
    duration: Item[];
    packages: Item[];
}
interface Item {
    id: string;
    title: string;
}

const CustomBottomSheet: React.FC<Props> = ({ isBottomSheetOpen, setIsBottomSheetOpen, bottomSheetRef, years, duration, packages }) => {
    const openBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current.open();
        }
    };

    const closeBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };

    return (
        <RBSheet
            ref={bottomSheetRef}
            height={400} // Set the height of the bottom sheet
            closeOnDragDown={true}
            onClose={closeBottomSheet}
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(0,0,0,0.5)",
                },
                container: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingHorizontal: 20,
                },
            }}
        >
           <View style={styles.header}>
                <TouchableOpacity onPress={closeBottomSheet}>
                    <Image
                        source={icons.xcancel}
                        style={{ height: 12, width: 12 }}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Filter By</Text>
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>Year</Text>
                <FlatList
                    data={years}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>Quarterly</Text>
                <FlatList
                    data={duration}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>Package Summary</Text>
                <FlatList
                    data={packages}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </View>
        </RBSheet>
    );
};

export default CustomBottomSheet;


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        alignItems: 'center'
    },
    title: {
        marginLeft: 110,
        ...FONTS.h3b,
        color: COLORS.black
    },
    itemContainer: {
        marginTop: 25
    },
    itemTitle: {
        ...FONTS.h4,
        color: COLORS.black
    },
    item: {
        marginHorizontal: 24,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.gray,
        paddingVertical: 6,
        paddingHorizontal: 24
    }
});

