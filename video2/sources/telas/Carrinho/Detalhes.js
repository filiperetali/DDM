import { View, Text, Image } from "react-native";

export default function Detalhes({titulo, tituloProduto, descricao, preco, imagem}){
  return(
    <View>
      <Text>{titulo}</Text>
      <Text>{tituloProduto}</Text>
      <Text>{descricao}</Text>
      <Text>{preco}</Text>
      <Image 
            source={imagem}
            style={{height:50, width:50}}
      />

    </View>
  )
}