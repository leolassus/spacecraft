import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Button,
} from "react-native";
import { Card, Paragraph, Title, Avatar } from "react-native-paper";
import { data } from "../data";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

interface LeftContentProps {
  size: number;
}

const LeftContent = (props: LeftContentProps) => {
  return <Avatar.Icon {...props} icon="folder" />;
};

function handlePress() {
  alert("Blabla");
}

interface renderItemProps {
  item: {
    name: string;
    manufacturer: string;
    passengers: string;
  };
}

const StarshipFeedScreen = () => {
  const renderItem = ({ item }: renderItemProps) => {
    const { name, manufacturer, passengers } = item;
    return (
      <>
        <QueryClientProvider client={queryClient}></QueryClientProvider>
        <View style={styles.card}>
          <Card>
            <Card.Title
              title="StarShip"
              subtitle="Star Wars"
              left={LeftContent}
            />
            <Card.Content>
              <Title>{name}</Title>
              <Paragraph>
                {manufacturer},En terme de passagers, le vaisseau peut
                accueillir : {passengers}
                passagers
              </Paragraph>
            </Card.Content>

            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button title="Press me" onPress={handlePress}></Button>
              <Button title="Press me" onPress={handlePress}></Button>
            </Card.Actions>
          </Card>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList data={data.results} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  card: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#E5E7EB",
    shadowOpacity: 0.5,
  },
  card_text: {
    color: "white",
  },

  text: {
    fontSize: 16,
  },
});

export default StarshipFeedScreen;