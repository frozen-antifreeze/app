import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
interface CurrentContextType {
  favorite: string[];
}
export const FavoriteStateContext =
  React.createContext<CurrentContextType | null>(null);

export const FavoriteStateProvider = (props: any) => {
  const [favorited, setFavorite] = useState<CurrentContextType>({
    favorite: [],
  });

  return (
    <FavoriteStateContext.Provider value={favorited}>
      {props.children}
    </FavoriteStateContext.Provider>
  );
};

const styles = StyleSheet.create({});
