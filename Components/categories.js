import { ScrollView, Text,View } from "react-native";
import React from "react";
import CategoriesCard from "./catogoriesCard";

const Categories= () =>{
    return(
        <ScrollView
        style={{marginVertical:5,marginLeft:2}}
        horizontal
        showsHorizontalScrollIndicator={false} >
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 1 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 2 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 3 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 4 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 5 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 6 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 1 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 2 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 3 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 4 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 5 "}/>
            <CategoriesCard url={"https://links.papareact.com/gn7"} title={"testing 6 "}/>
        </ScrollView>
    );
}
export default Categories;
