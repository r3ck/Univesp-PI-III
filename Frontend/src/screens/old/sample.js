import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function ProfilePosts() {
  return (
    <View style={styles.ProfilePosts}>
      <View style={styles.Group931}>
        <View style={styles.PageHeader}>
          <Text style={styles.Txt946}>Settings</Text>
          <Text style={styles.Txt592}>Profile</Text>
          <Text style={styles.Txt277}>Logout</Text>
        </View>
      </View>
      <Image
        style={styles.Ellipse6}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k0bfjckgtvi-151%3A686?alt=media&token=4763a79c-f713-4b40-b423-625e3a6102ef",
        }}
      />
      <Image
        style={styles.IosStatusBarWhite}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k0bfjckgtvi-151%3A547?alt=media&token=26525d23-f997-4e54-b1dd-5cfc4c056ad4",
        }}
      />
      <View style={styles.Group844}>
        <View style={styles.NameBio}>
          <Text style={styles.Txt4310}>Victoria Robertson</Text>
          <Text style={styles.Txt4710}>A mantra goes here</Text>
        </View>
        <View style={styles.SegmentedControlLeft}>
          <View style={styles.SegmentedControlStructure}>
            <View style={styles.LeftSelected}>
              <Text style={styles.Txt263}>Posts</Text>
            </View>
            <View style={styles.Group924}>
              <Text style={styles.Txt171}>Search</Text>
              <Text style={styles.Txt488}>Photos</Text>
            </View>
          </View>
        </View>
        <View style={styles.ContentContentBlockSmall}>
          <View style={styles.Group881}>
            <View style={styles.ContentBlock} />
            <View style={styles.Group2104}>
              <View style={styles.Group038}>
                <Text style={styles.Txt589}>Header</Text>
                <Text style={styles.Txt461}>8m ago</Text>
              </View>
              <Text style={styles.Txt463}>
                He'll want to use your yacht, and I don't want this thing
                smelling like fish.
              </Text>
            </View>
          </View>
          <View style={styles.DividerLine} />
        </View>
        <View style={styles.ContentContentBlockSmall}>
          <View style={styles.Group881}>
            <View style={styles.ContentBlock} />
            <View style={styles.Group2104}>
              <View style={styles.Group038}>
                <Text style={styles.Txt589}>Header</Text>
                <Text style={styles.Txt461}>8m ago</Text>
              </View>
              <Text style={styles.Txt463}>
                He'll want to use your yacht, and I don't want this thing
                smelling like fish.
              </Text>
            </View>
          </View>
          <View style={styles.DividerLine} />
        </View>
        <View style={styles.ContentContentBlockSmall}>
          <View style={styles.Group881}>
            <View style={styles.ContentBlock} />
            <View style={styles.Group2104}>
              <View style={styles.Group038}>
                <Text style={styles.Txt589}>Header</Text>
                <Text style={styles.Txt461}>8m ago</Text>
              </View>
              <Text style={styles.Txt463}>
                He'll want to use your yacht, and I don't want this thing
                smelling like fish.
              </Text>
            </View>
          </View>
          <View style={styles.DividerLine} />
        </View>
        <View style={styles.ContentContentBlockSmall1}>
          <View style={styles.Group881}>
            <View style={styles.ContentBlock} />
            <View style={styles.Group2104}>
              <View style={styles.Group038}>
                <Text style={styles.Txt589}>Header</Text>
                <Text style={styles.Txt461}>8m ago</Text>
              </View>
              <Text style={styles.Txt463}>
                He'll want to use your yacht, and I don't want this thing
                smelling like fish.
              </Text>
            </View>
          </View>
          <View style={styles.DividerLine} />
        </View>
      </View>
      <View style={styles.IosBottomBar5Tabs}>
        <View style={styles.TopDivider} />
        <View style={styles.Group924}>
          <View style={styles.Rectangle9} />
          <View style={styles.Rectangle10} />
          <View style={styles.Rectangle11} />
          <View style={styles.Rectangle12} />
          <View style={styles.Rectangle13} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ProfilePosts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 375,
    height: 812,
  },
  Group931: {
    position: "absolute",
    top: 0,
    none: "0px",
    paddingTop: 59,
    paddingBottom: 148,
    paddingLeft: 16,
    paddingRight: 15,
    backgroundColor: "rgba(93,176,117,1)",
    width: 376,
    height: 245,
  },
  PageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Txt946: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 61,
  },
  Txt592: {
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 68,
  },
  Txt277: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Ellipse6: {
    position: "absolute",
    top: 128,
    left: 5015820.5,
    width: 158,
    height: 158,
  },
  IosStatusBarWhite: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: 375,
    height: 44,
  },
  Group844: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 302,
    none: "0px",
    width: 343,
    height: 509,
  },
  NameBio: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 24,
  },
  Txt4310: {
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
  Txt4710: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  SegmentedControlLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k0bfjckgtvi-I151%3A886%3B151%3A711%3B151%3A696?alt=media&token=d844f9ee-fedf-48c7-adca-81ab4e8d45b8) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
  SegmentedControlStructure: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 100,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k0bfjckgtvi-I151%3A886%3B151%3A711%3B151%3A696?alt=media&token=d844f9ee-fedf-48c7-adca-81ab4e8d45b8) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
  LeftSelected: {
    paddingTop: 13,
    paddingBottom: 11,
    paddingLeft: 63,
    paddingRight: 61.5,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k0bfjckgtvi-I151%3A886%3B151%3A711%3B151%3A699?alt=media&token=5a5a970c-a981-4110-ac00-080c0a57eb34) */
    width: 171.5,
    height: 46,
  },
  Txt263: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(93,176,117,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group924: {
    display: "flex",
    flexDirection: "row",
  },
  Txt171: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(189,189,189,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 112,
  },
  Txt488: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(189,189,189,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
  },
  Group881: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  Group2104: {
    display: "flex",
    flexDirection: "column",
  },
  Group038: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt589: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 169,
  },
  Txt461: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(189,189,189,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt463: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
  },
  Group881: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  Group2104: {
    display: "flex",
    flexDirection: "column",
  },
  Group038: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt589: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 169,
  },
  Txt461: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(189,189,189,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt463: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
  },
  Group881: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  Group2104: {
    display: "flex",
    flexDirection: "column",
  },
  Group038: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt589: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 169,
  },
  Txt461: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(189,189,189,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt463: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  ContentContentBlockSmall1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group881: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  Group2104: {
    display: "flex",
    flexDirection: "column",
  },
  Group038: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt589: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 169,
  },
  Txt461: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(189,189,189,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt463: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  IosBottomBar5Tabs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    bottom: 0.5,
    left: 0,
    right: 0,
    paddingTop: 0,
    paddingBottom: 35.5,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(250,250,250,1)",
    width: 375,
    height: 83.5,
  },
  TopDivider: {
    backgroundColor: "rgba(189,197,205,1)",
    width: 375,
    height: 0.5,
    marginBottom: 13,
  },
  Group924: {
    display: "flex",
    flexDirection: "row",
  },
  Rectangle9: {
    backgroundColor: "rgba(93,176,117,1)",
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 40,
  },
  Rectangle10: {
    backgroundColor: "rgba(232,232,232,1)",
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 40,
  },
  Rectangle11: {
    backgroundColor: "rgba(232,232,232,1)",
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 40,
  },
  Rectangle12: {
    backgroundColor: "rgba(232,232,232,1)",
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 40,
  },
  Rectangle13: {
    backgroundColor: "rgba(232,232,232,1)",
    width: 32,
    height: 32,
    borderRadius: 100,
  },
})
