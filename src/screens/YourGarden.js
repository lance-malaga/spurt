import React from "react";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, FlatList } from "react-native";
import NavBar from "../components/NavBar";

export default function YourGarden() {
    return (
        <>
            <Text>Your Garden</Text>
            <NavBar/>
        </>
    )
}