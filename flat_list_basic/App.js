import React, {Component} from 'react';
import { FlatList, ScrollView, Text, View } from "react-native";

class xYx extends Component {

  MyData = [
    {name: "MHR",country: "BD"},
    {name: "Rahim",country: "PAK"},
    {name: "Karim",country: "IND"},
    {name: "Salam",country: "TR"},
    {name: "Salam",country: "TR"},
    {name: "Rahim",country: "PAK"},
    {name: "Karim",country: "IND"},
    {name: "Salam",country: "TR"},
    {name: "Salam",country: "TR"},
    {name: "Rahim",country: "PAK"},
    {name: "Karim",country: "IND"},
    {name: "Salam",country: "TR"},
    {name: "Salam",country: "TR"},
    {name: "Rahim",country: "PAK"},
    {name: "Karim",country: "IND"},
    {name: "Salam",country: "TR"},
    {name: "Salam",country: "TR"},
  ];
  ChildView = ({ChildName, ChildCountry}) => {
    return (
        <ScrollView style={{backgroundColor: "pink", padding: 10, margin: 5}}>
          <Text style={{backgroundColor: "pink",color: "red", fontSize: 18}}>{ChildName}</Text>
          <Text style={{color: "blue", fontSize: 12}}>{ChildCountry}</Text>
        </ScrollView>
    )
  }

  render() {
    return (
        <FlatList data={this.MyData} renderItem={({item})=><this.ChildView ChildCountry={item.name} ChildName={item.country} />} />
    );
  }
}

export default xYx;
