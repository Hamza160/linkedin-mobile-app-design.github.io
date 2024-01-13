import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../theme/metrics'
import { COLORS, FONTAMILY } from '../theme'
import CustomIcon from './CustomIcon'

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <CustomIcon name="search" size={19}/>
      <TextInput
        style={{border: 1, borderColor: '#000'}}
        placeholder="Search"
        style={styles.input}
        placeholderTextColor="#000"
      />
      <CustomIcon name="QR" size={24}/>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:horizontalScale(20),
        height:verticalScale(40),
        backgroundColor:COLORS.lightBlue,
        borderRadius:moderateScale(5),
        paddingHorizontal:moderateScale(10)
    },
    input:{
        flex:1,
        fontFamily:FONTAMILY.RobotoRegular,
        fontSize:moderateScale(18),
        height:100,
        marginLeft:horizontalScale(5),
        color:COLORS.black
    }
})