//import liraries
import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, images, FONTS, icons } from '../../constants';
import Header from '../../components/common/Header';
import { SCREEN_HEIGHT, SCREEN_WIDTH, SIZES } from '../../constants/theme';
import { scale } from '../../utils/shared';
import { BlurView } from '@react-native-community/blur';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BarChart, LineChart, ruleTypes } from 'react-native-gifted-charts';
import Card from '../../components/common/Card';
import RBSheet from 'react-native-raw-bottom-sheet';
import Button from '../../components/Button/Button';
import CustomBottomSheet from '../../components/common/CustomBottomSheet';
import NotificationModal from '../../components/common/NotificationModal';
import { useNavigation } from '@react-navigation/native';
import { data, packages, years, duration  } from '../../utils/Datas';

// create a component

interface YearItem {
    id: string;
    title: string;
}

interface QItem {
    id: string;
    title: string;
}

interface PackageItem {
    id: string;
    title: string;
}

interface Guildlinesprop {
    navigation?: any
}

const LockerService: React.FC<Guildlinesprop> = ({ navigation }) => {
    // const navigation = useNavigation();
    const bottomSheetRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(true);
    const [selectedYear, setSelectedYear] = useState('2024');
    const [selectedYearIndex, setselectedYearIndex] = useState(null)
    const [selectedQuarter, setSelectedQuarter] = useState('Q1');
    const [selectedQuarterIndex, setselectedQuarterIndex] = useState(null)
    const [selectedPackage, setSelectedPackage] = useState('');
    const [selectedPackageIndex, setselectedPackageIndex] = useState(null)
    const [DeliverdTotal, setDeliveredTotal] = useState();
    const [PendingTotal, setPendingTotal] = useState();



    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };



    const openBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current.open();
        }
    };

    const closeBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current.close();
        }
    };

    const handlePress = () => {
        closeBottomSheet(); // Close the bottom sheet after handling the press
        navigation.goBack()
    };

    const HandleFilter = () => {
        openBottomSheet()
    }

    const [filteredData, setFilteredData] = useState(() => {
        // Filter the data to include only the year 2024 and the first quarter (January to March)
        const defaultFilteredData = data['2024']?.filter((item, index) => {
            return index < 6; // Return data for Jan, Feb, Mar
        }) || [];

        console.log('====================================');
        console.log({defaultFilteredData});
        console.log('====================================');

        return defaultFilteredData;
    });

    const handleSave = () => {
        // Close the bottom sheet
        closeBottomSheet();
        console.log('Selected Year:', selectedYear);
        console.log('Selected Quarter:', selectedQuarter);
        console.log('Selected Package:', selectedPackage);
    
        // Perform filtering of data based on selected year, quarter, and package
        let filteredData = data[selectedYear];
    
        // Filter by quarter
        if (selectedQuarter === 'Q1') {
            filteredData = filteredData.filter((item, index) => index < 6); // Return data for Jan, Feb, Mar
        } else if (selectedQuarter === 'Q2') {
            filteredData = filteredData.filter((item, index) => index >= 6 && index < 12); // Return data for Apr, May, Jun
        } else if (selectedQuarter === 'Q3') {
            filteredData = filteredData.filter((item, index) => index >= 12 && index < 18); // Return data for Jul, Aug, Sep
        } else if (selectedQuarter === 'Q4') {
            filteredData = filteredData.filter((item, index) => index >= 18); // Return data for Oct, Nov, Dec
        }
    
        // Filter by package
        if (selectedPackage === 'Delivered Package') {
            filteredData = filteredData.filter((item, index) => index % 2 === 0); // Filter even indices
        } else if (selectedPackage === 'Pending Package') {
            filteredData = filteredData.filter((item, index) => index % 2 !== 0); // Filter odd indices
        }
    
        console.log('Filtered Data:', filteredData);
        setFilteredData(filteredData);
    };

    const clearFilter = () => {
        // Close the bottom sheet
        closeBottomSheet();
    
        // Reset selected year and quarter to default values
        setSelectedYear('2024');
        setselectedYearIndex(null);
        setSelectedQuarter('Q1');
        setselectedQuarterIndex(null);
    
        // Reset filtered data to default
        const defaultFilteredData = data['2024']?.filter((item, index) => {
            return index < 6; // Return data for Jan, Feb, Mar
        }) || [];
        setselectedPackageIndex(null)
        setSelectedPackage('')
        setFilteredData(defaultFilteredData);
    };


    // Calculate the sum of values for odd and even numbers
const calculateSum = () => {
    let oddSum = 0;
    let evenSum = 0;

    filteredData.forEach((item, index) => {
        if (index % 2 === 0) {
            // Even index (odd number)
            oddSum += item.value;
        } else {
            // Odd index (even number)
            evenSum += item.value;
        }
    });

    setDeliveredTotal(oddSum)
    setPendingTotal(evenSum)

    console.log('Sum of odd numbers:', oddSum);
    console.log('Sum of even numbers:', evenSum);
};

useEffect(()=> {
    calculateSum()
},[filteredData])

    
    
    

const renderYears = ({ item, index }: { item: YearItem; index: number }) => {
    console.log('====================================');
    console.log({selectedYear});
    console.log({selectedYearIndex});

    console.log('====================================');
    return (
        <TouchableOpacity
            style={[styles.years, { backgroundColor: selectedYearIndex === item.id ? COLORS.primary : 'transparent' }]}
            onPress={() => {
                setSelectedYear(item.title);
                setselectedYearIndex(item.id)
            }}
        >
            <Text style={{ ...styles.item, color: selectedYearIndex === item.id ? COLORS.white : COLORS.black }}>{item?.title}</Text>
        </TouchableOpacity>
    )
}

const renderQ = ({ item, index }: { item: QItem; index: number }) => {
    console.log('====================================');
    console.log({selectedQuarter});
    console.log({selectedQuarterIndex});
    
    console.log('====================================');
    return (
        <TouchableOpacity
            style={[styles.Quarter, { backgroundColor: selectedQuarterIndex === item.id ? COLORS.primary : 'transparent' }]}
            onPress={() => {
                setSelectedQuarter(item.title);
                setselectedQuarterIndex(item.id)
            }}
        >
            <Text style={{ ...styles.item, color: selectedQuarterIndex === item.id ? COLORS.white : COLORS.black }}>{item?.title}</Text>
        </TouchableOpacity>
    )
}

const renderPackage = ({ item, index }: { item: PackageItem; index: number }) => {
    return (
        <TouchableOpacity
            style={[styles.packages, { backgroundColor: selectedPackageIndex === item.id ? COLORS.primary : 'transparent' }]}
            onPress={() => {
                setSelectedPackage(item.title)
                setselectedPackageIndex(item?.id)
            }}
        >
            <Text style={{ ...styles.item, color: selectedPackageIndex === item.id ? COLORS.white : COLORS.black }}>{item?.title}</Text>

        </TouchableOpacity>
    )
}



    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <NotificationModal
                HandleCancel={() => setModalVisible(false)}
                visible={modalVisible}
                message="Learn how locker services work"
                onPress={() => {
                    setModalVisible(false)
                    navigation.navigate('Notification')}}
                title="Explore the world of locker services with HubLocker"
                ImageSource={true}
                Header='Your Gateway to Convenience!'

            />
            <Header
                title='Locker Service'
                handleFilter={HandleFilter} />

            <View style={{ marginHorizontal: scale(20) }}>

           
                    <Image
                      
                        source={images.apartment1}
                        style={styles.ImageStyle}
                    />
                        
                        
                    
                        <Text
                                style={styles.placeText}>
                                Town Place Apartments
                            </Text>
                     
          


                <View style={styles.summaryContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.packageText}>Package Summary</Text>
                    </TouchableOpacity>

                    <Text style={styles.qText}>{selectedQuarter === 'Q1'? 'Q4-Q1': selectedQuarter === 'Q2' ? 'Q1-Q2' :  selectedQuarter === 'Q3' ? 'Q2-Q3': selectedQuarter === 'Q4' ? 'Q3-Q4' : 'Q1-Q3'}</Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.row2}>
                        <View style={styles.circle} />
                        <Text style={styles.circleText}>Delivered Packages</Text>

                    </View>

                    <View style={{ ...styles.row2, marginLeft: scale(10) }}>
                        <View style={styles.circle2} />
                        <Text style={styles.circleText}>Pending Packages</Text>

                    </View>

                </View>


                <View style={{ marginTop: scale(30), marginBottom: scale(20) }}>
                    <BarChart
                        data={filteredData}
                        barWidth={40}
                        initialSpacing={10}
                        
                        spacing={19}
                        barBorderRadius={0}
                        showGradient
                        showVerticalLines={true}
                        yAxisThickness={0}
                        xAxisType={ruleTypes.DOTTED}
                        xAxisColor={COLORS.gray7}
                        yAxisTextStyle={{ color: COLORS.gray7, ...FONTS.h4c }}
                        stepValue={10}
                        maxValue={60}
                        noOfSections={6}
                        yAxisLabelTexts={['0', '5', '10', '20', '40', '50', '60']}
                        labelWidth={40}
                        xAxisLabelTextStyle={{ color: COLORS.gray7, textAlign: 'center', ...FONTS.h4c }}
                        isAnimated
                        animationDuration={400}
                        scrollAnimation={true}
                        // focusEnabled={true}
                        showLine
                        lineConfig={{
                            color: '#F29C6E',
                            thickness: 1,
                            curved: true,
                            hideDataPoints: true,
                            shiftY: 20,
                            initialSpacing: -30,
                        }}
                    />

                </View>


                <View style={{ backgroundColor: COLORS.gray1a, width: SCREEN_WIDTH, alignSelf: 'center', paddingBottom: scale(30) }}>
                    <View style={{ marginTop: scale(20), marginHorizontal: scale(20) }}>
                        <Card
                            title='Delivered Packages'
                            count={selectedPackage === 'Pending Package'? '0' : DeliverdTotal}
                            handleOnPress={undefined}
                            pending={false}
                        />
                    </View>

                    <View style={{ marginTop: scale(10), marginHorizontal: scale(20) }}>
                        <Card
                            title='Pending Packages'
                            count={selectedPackage === 'Delivered Package'? '0' : PendingTotal}
                            handleOnPress={undefined}
                            pending={true}
                        />
                    </View>
                </View>
            </View>

            <RBSheet
                ref={bottomSheetRef}
                height={SIZES.height * 0.52} // Set the height of the bottom sheet
                closeOnDragDown={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                    },
                    container: {
                        borderTopLeftRadius: SIZES.h5,
                        borderTopRightRadius: SIZES.h5,
                        paddingHorizontal: SIZES.width * 0.05,
                    },
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: scale(20),
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={clearFilter}>
                        <Image
                            source={icons.xcancel}
                            style={{ height: scale(12), width: scale(12) }}
                        />
                    </TouchableOpacity>

                    <Text style={{ marginLeft: scale(110), ...FONTS.h3b, color: COLORS.black }}>Filter By</Text>


                </View>

                <View style={styles.otherView}>
                    <View>
                        <Text style={styles.text}>Year</Text>
                        <View style={{ marginTop: scale(10) }}>
                            <FlatList
                                data={years}
                                renderItem={renderYears}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: scale(20) }}>
                        <Text style={styles.text}>Quaterly</Text>
                        <View style={{ marginTop: scale(10) }}>
                            <FlatList
                                data={duration}
                                renderItem={renderQ}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>
                    </View>


                    <View style={{ marginTop: scale(20) }}>
                        <Text style={styles.text}>Package Summary</Text>
                        <View style={{ marginTop: scale(10) }}>
                            <FlatList
                                data={packages}
                                renderItem={renderPackage}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id.toString()}

                            />
                        </View>
                    </View>

                    <View style={{ marginTop: scale(30), marginHorizontal: scale(20) }}>
                        <Button
                            text='Save'
                            onPress={handleSave}
                        />
                    </View>

                </View>

            </RBSheet>


        </ScrollView>
    );


    
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    },
    ImageStyle: {
        height: SCREEN_HEIGHT * 0.16,
        resizeMode: 'cover',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: scale(5),
        marginTop: scale(20),
        width: '100%',
        alignSelf: 'center'
    },
    item: {
        ...FONTS.h4,
        fontSize: scale(13)
    },
    description: {
        ...FONTS.h4a,
        color: COLORS.black
    },
    text: {
        ...FONTS.h4,
        color: COLORS.black
    },
    otherView: {
        marginTop: scale(25)
    },
    ImageContainer: {
        marginTop: scale(20),
        paddingBottom: scale(2)
    },
    placeText: {
        ...FONTS.h4b,
        fontSize: scale(13),
        color: COLORS.white,
        textAlign: 'center',
        position: 'absolute',
        top: scale(116),
        bottom: 0,
        alignSelf: 'center'

    },
    // BlurContainer: {
    //     position: 'absolute',
    //     width: '100%',
    //     marginTop: scale(97),
    //     alignItems: 'center',
    //     backgroundColor: 'red'
    // },
    summaryContainer: {
        marginTop: scale(25)
    },
    packageText: {
        ...FONTS.h3b,
        color: COLORS.black
    },
    qText: {
        ...FONTS.h5,
        color: COLORS.gray6,
        fontSize: scale(15)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // width: '90%',
        alignItems: 'center',
        marginTop: scale(25)
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '45%',
        alignItems: 'center',
        backgroundColor: COLORS.gray2,
        borderRadius: scale(14),
        paddingHorizontal: scale(5)
    },
    circle: {
        backgroundColor: COLORS.primary,
        height: scale(7),
        borderRadius: 50,
        width: scale(7)
    },
    circle2: {
        backgroundColor: 'red',
        height: scale(7),
        borderRadius: 50,
        width: scale(7)
    },
    circleText: {
        ...FONTS.h5a,
        fontSize: scale(11),
        color: COLORS.black,
        marginLeft: scale(5)
    },
    years: {
        marginHorizontal: scale(24),
        borderRadius: scale(16),
        borderWidth: 1,
        borderColor: COLORS.gray,
        paddingVertical: scale(6),
        paddingHorizontal: scale(24)
    },
    Quarter: {
        marginHorizontal: scale(10),
        borderRadius: scale(16),
        borderWidth: 1,
        borderColor: COLORS.gray,
        paddingVertical: scale(6),
        paddingHorizontal: scale(20)
    },
    packages: {
        marginHorizontal: scale(4),
        borderRadius: scale(16),
        borderWidth: 1,
        borderColor: COLORS.gray,
        paddingVertical: scale(6),
        paddingHorizontal: scale(19)
    }


});

//make this component available to the app
export default LockerService;
