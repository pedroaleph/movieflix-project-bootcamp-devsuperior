import React, { useEffect, useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { getGenders } from "../../../services/requests";
import { Genre } from "../../../types/genre";
import arrow from "../../../assets/arrow.png"
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { defaultStyles } from "../../../custom";

type Props = {
  handleChangeGenre: (genre: Genre) => void;
}

const GenreFilter: React.FC<Props> = ({ handleChangeGenre }: Props) => {
  const [genders, setGenders] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingGenders, setIsShowingGenders] = useState(false);

  const loadGenders = async () => {
    setIsLoading(true);
    const res = await getGenders();
    setGenders(res.data);
    setIsLoading(false);
  }

  useEffect(() => {
    loadGenders();
  }, [])

  return (
    <View style={[ defaultStyles.cardBase, styles.container]}>
      <Modal
        visible={isShowingGenders}
        animationType="fade"
        transparent
        presentationStyle="overFullScreen"
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setIsShowingGenders(!isShowingGenders)}
        >
          <Text style={styles.modalText}>Selecione um gênero:</Text>
          <ScrollView style={styles.modalContent}>
            {genders && genders.map(genre => (
              <TouchableOpacity
                style={styles.modalItem}
                activeOpacity={0.8}
                key={genre.id}
                onPress={() => {
                  setSelectedGenre(genre);
                  handleChangeGenre(genre);
                  setIsShowingGenders(!isShowingGenders);
                }}
              >
                <Text style={styles.modalItemText}>
                  {genre.name}
                </Text>
              </TouchableOpacity>
            )
            )}
            <TouchableOpacity
              style={styles.modalItem}
              activeOpacity={0.8}
              onPress={() => {
                setSelectedGenre(undefined);
                handleChangeGenre({ id: 0, name: '' });
                setIsShowingGenders(!isShowingGenders);
              }}
            >
              <Text style={styles.modalItemText}>
                Todos os gêneros
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableOpacity>
      </Modal>
      {!isLoading && (
        <TouchableOpacity
          style={styles.filterContainer}
          activeOpacity={0.8}
          onPress={() => setIsShowingGenders(!isShowingGenders)}
        >
          <Text style={styles.filterText}>
            {selectedGenre ? selectedGenre.name : 'Filtrar por gênero'}
          </Text>
          <Image style={styles.filterArrow} source={arrow} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default GenreFilter;