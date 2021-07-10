import React, { useCallback, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-tiny-toast";
import { defaultStyles, errorMessage, loadingMessage, successMessage } from "../../../../custom";
import { postReview } from "../../../../services/requests";
import { styles } from "./styles";

type ReviewData = {
  movie_id: number;
  text: string;
}

type Props = {
  movie_id: number;
  handleReload: () => void;
}


const CreateReview: React.FC<Props> = ({ movie_id, handleReload }) => {
  const [reviewData, setReviewData] = useState<ReviewData>({ movie_id: 0, text: '' });

  const handleSaveReview = useCallback(async (data: ReviewData) => {
    const payload = { ...data, movie_id }
    const saving = loadingMessage('Salvando avaliação...');
    await postReview({ data: payload })
      .then(() => {
        Toast.hide(saving);
        successMessage('Avaliação salva com sucesso!');
      })
      .catch(() => {
        Toast.hide(saving);
        errorMessage('Erro ao salvar avaliação!');
      })
      .finally(() => {
        setReviewData({ movie_id: 0, text: '' });
      })
  }, [handleReload])
  useEffect(() => {

  }, [handleReload])

  const handleState = () => {
    handleReload();
    handleSaveReview(reviewData);
  }

  const isTextNotEmpty = (text: string) => {
    const newText = text.replace(/\r?\n|\r/g, '').replace(/ /g, '');
    try {
      if (!newText.length) throw new Error();
      else return true;
    }
    catch (err) {
      errorMessage('Não é permitido texto vazio!');
      return false;
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        placeholder="Deixei sua avaliação aqui"
        placeholderTextColor="#9E9E9E"
        style={[defaultStyles.inputBase, styles.reviewInput]}
        value={reviewData.text}
        onChangeText={event => setReviewData({ ...reviewData, text: event })}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.saveContainer}
        onPress={() => {
          if (isTextNotEmpty(reviewData.text)) {
            handleState();
          }
        }}
      >
        <Text style={styles.saveText}>salvar avaliação</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateReview;