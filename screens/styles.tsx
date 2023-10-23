import { StyleSheet } from "react-native";
const imageSize = 69;
export const style = StyleSheet.create({
  container: {
    flex: 1,
    // width: 381,
    backgroundColor: "#fff",
    // alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
  },
  rowDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowContainer: {
    flexDirection: "row",
    width: 343,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  imageIcon: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  },
  imageDesc: {
    width: 120,
    marginTop:350,
    height: 180,
    borderRadius:8
  },

  inputBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    // backgroundColor: "#69f",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  inputBox2: {
    borderColor: "#ddd",
    width: "100%",
    height: 40,
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    // marginBottom:8
  },
});
