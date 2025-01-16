import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack, router } from 'expo-router';

export default function MyDetailsScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: false,
        }} 
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.headerButton}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mijn gegevens</Text>
        <View style={styles.headerSpace} />
      </View>

          {/* Personal Information Card */}
          <View style={styles.card}>
            <Text style={styles.cardIcon}>👤</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Persoonlijke gegevens</Text>
              <View style={styles.cardDetails}>
                <Text style={styles.cardText}>Naam Achternaam</Text>
                <Text style={styles.cardText}>Geboorte datum</Text>
                <Text style={styles.cardText}>Telefoon nummer</Text>
                <Text style={styles.cardText}>Particulier/Zakelijk</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.editButton}>Wijzig</Text>
            </TouchableOpacity>
          </View>

          {/* Login Information Card */}
          <View style={styles.card}>
            <Text style={styles.cardIcon}>🛡️</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Inloggegevens</Text>
              <View style={styles.cardDetails}>
                <Text style={styles.cardText}>Email-adres</Text>
                <Text style={styles.cardText}>••••••••</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.editButton}>Wijzig</Text>
            </TouchableOpacity>
          </View>

          {/* Delete Account Card */}
          <View style={styles.card}>
            <Text style={styles.cardIcon}>👤</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Account verwijderen</Text>
              <Text style={styles.cardText}>
                Wil je dat je account of gegevens verwijderen? Hier lees je hoe dat werkt.
              </Text>
              <TouchableOpacity>
                <Text style={[styles.editButton, styles.deleteText]}>
                  Verwijder mijn account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00A1F1',
    padding: 16,
  },
  headerButton: {
    color: 'white',
    fontSize: 20,
  },
  headerTitle: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  headerSpace: {
    width: 32,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profilePic: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#e5e5e5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 8,
  },
  cardDetails: {
    marginTop: 8,
  },
  cardText: {
    color: '#666',
    marginBottom: 4,
  },
  editButton: {
    color: '#00A1F1',
  },
  deleteText: {
    marginTop: 8,
  },
}); 