import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';

type IconName = "gift.fill" | "doc.fill" | "headphones" | "gearshape.fill" | 
                "person.fill" | "eye.fill" | "message.fill" | "doc.text.fill";

export default function ProfileScreen() {
  const userName = "Bo";

  const menuItems: { icon: IconName; label: string; onPress?: () => void }[] = [
    { icon: "gift.fill", label: "Bestellingen" },
    { icon: "doc.fill", label: "Facturen" },
    { icon: "headphones", label: "Klantenservice" },
    { icon: "gearshape.fill", label: "Instellingen" },
    { 
      icon: "person.fill", 
      label: "Mijn gegevens",
      onPress: () => router.push('/(tabs)/mydetails')
    },
    { icon: "eye.fill", label: "Bestellingen" },
    { icon: "message.fill", label: "Help de app te verbeteren" },
    { icon: "doc.text.fill", label: "Voorwaarden" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hoi {userName},</Text>
        <Text style={styles.headerSubtitle}>Welkom terug.</Text>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <IconSymbol name={item.icon} size={24} color="#3B82F6" />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          
          {/* Uitloggen Button */}
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => alert("Logging out...")}
          >
            <Text style={styles.logoutText}>Uitloggen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3B82F6',
    padding: 16,
    paddingTop: 50,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#fff',
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  menuContainer: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuLabel: {
    marginLeft: 12,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#BFDBFE',
    borderRadius: 8,
    padding: 12,
    marginVertical: 16,
    alignItems: 'center',
  },
  logoutText: {
    color: '#3B82F6',
    fontSize: 16,
  },
}); 