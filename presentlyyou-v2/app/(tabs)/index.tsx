import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const products = [
  {
    id: 1,
    name: "Nette schoenen",
    price: 89.99,
    rating: 4.5,
    reviews: 128,
    image: "https://placekitten.com/200/200",
  },
  {
    id: 2,
    name: "Logitech M705",
    price: 49.99,
    rating: 4.8,
    reviews: 256,
    image: "https://placekitten.com/200/200",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 129.99,
    rating: 4.3,
    reviews: 89,
    image: "https://placekitten.com/200/200",
  },
];

export default function ScreenOne() {
  const [searchText, setSearchText] = useState("");

  const renderStars = (rating: number) => {
    const stars = "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Add spacing before the search bar */}
      <View style={styles.spacing} />

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Zoeken..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={require("../../assets/images/banner.png")}
          style={styles.bannerImage}
        />
      </View>

      {/* Birthday Reminder */}
      <View style={styles.reminderContainer}>
        <Text style={styles.reminderTitle}>Vergeet niet</Text>
        <Text style={styles.reminderSubtitle}>Er komt een verjaardag aan!</Text>
        <TouchableOpacity
          style={styles.reminderButton}
          onPress={() => Alert.alert("Verlanglijst wordt geopend")}
        >
          <Text style={styles.reminderButtonText}>Bekijk verlanglijst</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <Text style={styles.productsTitle}>Aanbevolen producten</Text>
      <ScrollView horizontal style={styles.productsContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.productRatingContainer}>
              <Text style={styles.productStars}>{renderStars(product.rating)}</Text>
              <Text style={styles.productReviews}>({product.reviews})</Text>
            </View>
            <Text style={styles.productPrice}>€{product.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  spacing: {
    height: 20, // Add space before the search bar
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 8,
  },
  searchIcon: {
    marginLeft: 10,
    fontSize: 18,
    color: "#aaa",
  },
  bannerContainer: {
    margin: 16,
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  bannerTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  reminderContainer: {
    backgroundColor: "white",
    margin: 16,
    padding: 16,
    borderRadius: 10,
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  reminderSubtitle: {
    color: "#666",
    marginVertical: 8,
  },
  reminderButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  reminderButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  productsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  productsContainer: {
    paddingHorizontal: 16,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginRight: 16,
    width: 200,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  productName: {
    marginTop: 8,
    fontWeight: "bold",
  },
  productRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  productStars: {
    color: "#ffd700",
  },
  productReviews: {
    color: "#666",
    marginLeft: 4,
  },
  productPrice: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
});
