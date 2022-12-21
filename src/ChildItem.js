import React, { useContext } from 'react';
import { Pressable, Image, View, Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { ThemeContext } from '../../../context/theme.context';


export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
}) => {

  const { Main, theme } = useContext(ThemeContext);
  return (
    <Pressable
      style={[Main.containerLib, style]}
      onPress={() => onPress(index)}>
      <View style={{ paddingTop: 20 }}>
        <MaskedView maskElement={<Text style={Main.titleLib} >{item["title"]}</Text>}>
          <LinearGradient
            colors={[theme.dotOffColor, theme.dotColor]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[Main.titleLib, { opacity: 0 }]} >{item["title"]}</Text>
          </LinearGradient>
        </MaskedView>
      </View>

      <View style={Main.descriptionLib}>
        <Text style={Main.description}>{item["desc"]}</Text>
      </View>

      <View style={Main.imageLib}>
        <Image source={local ? item[imageKey] : { uri: item[imageKey] }} />
      </View>
    </Pressable>
  );
});
