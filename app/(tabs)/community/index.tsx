import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("community");

  const posts = [
    {
      id: 1,
      name: "Mariane",
      handle: "@marianeee",
      date: "1/21/20",
      text: "Just saw a fire burning someone's house down at downtown Berkeley. Stay safe and avoid this area!",
      img: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1200&auto=format&fit=crop",
      comments: 7,
      retweets: 1,
      likes: 3,
    },
    {
      id: 2,
      name: "Mariane",
      handle: "@marianeee",
      date: "1/21/20",
      text: "Just saw a fire burning someone's house down at downtown Berkeley. Stay safe and avoid this area!",
      img: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1200&auto=format&fit=crop",
      comments: 7,
      retweets: 1,
      likes: 3,
    },
  ];

  const tabs = [
    { key: "community", label: "Comm" },
    { key: "features", label: "Features" },
    { key: "map", label: "Map" },
    { key: "alerts", label: "Alerts" },
    { key: "you", label: "You" },
  ];

  return (
    <View style={styles.app}>
      {/* Top Bar */}
      <View style={styles.topbar}>
        <Text style={styles.globe}>🌐</Text>
        <Text style={styles.city}>Berkeley, CA</Text>
      </View>

      {/* Feed */}
      <ScrollView contentContainerStyle={styles.feed}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <View style={styles.row}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
                }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.name}>{post.name}</Text>
                <Text style={styles.handle}>
                  {post.handle} · {post.date}
                </Text>
              </View>
            </View>

            <Text style={styles.tweet}>{post.text}</Text>

            <Image source={{ uri: post.img }} style={styles.media} />

            <View style={styles.actions}>
              <Text style={styles.action}>💬 {post.comments}</Text>
              <Text style={[styles.action, { color: "#33c36b" }]}>
                🔁 {post.retweets}
              </Text>
              <Text style={[styles.action, { color: "#e25563" }]}>
                ❤️ {post.likes}
              </Text>
              <Text style={styles.action}>↗️</Text>
            </View>

            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.nav}>
        <View style={styles.navbar}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              style={[
                styles.navBtn,
                activeTab === tab.key && styles.navBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.navLabel,
                  activeTab === tab.key && styles.navLabelActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.homebar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#0f1320",
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 12,
  },
  globe: {
    fontSize: 24,
  },
  city: {
    fontSize: 22,
    fontWeight: "700",
    color: "#eef2ff",
  },
  feed: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  post: {
    marginBottom: 28,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#d7dee8",
  },
  name: {
    fontWeight: "800",
    color: "#eef2ff",
  },
  handle: {
    color: "#8a94a6",
  },
  tweet: {
    color: "#d9e2ff",
    marginVertical: 8,
  },
  media: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    backgroundColor: "#000",
    marginVertical: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 6,
  },
  action: {
    color: "#8a94a6",
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#2a3246",
    marginTop: 8,
  },
  nav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#0f1320",
    paddingBottom: 18,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#2a3246",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#12182a",
    borderRadius: 22,
    marginHorizontal: 16,
    paddingVertical: 10,
  },
  navBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
  },
  navBtnActive: {
    backgroundColor: "#66c2e3",
  },
  navLabel: {
    color: "#dbe5ff",
    fontSize: 14,
  },
  navLabelActive: {
    color: "#0a0f17",
    fontWeight: "700",
  },
  homebar: {
    alignSelf: "center",
    marginTop: 10,
    width: 120,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#ffffff90",
  },
});
