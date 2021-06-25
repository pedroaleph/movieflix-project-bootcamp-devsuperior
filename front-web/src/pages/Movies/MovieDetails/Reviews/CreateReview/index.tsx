import history from 'core/utils/history';
import { makeRequest } from 'core/utils/request';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './styles.scss';

type ReviewData = {
  movie_id: number;
  text: string;
}

type Props = {
  movie_id: number;
}

const CreateReview = ({ movie_id }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ReviewData>();

  const onSubmit = (data: ReviewData) => {
    const payload = { ...data, movie_id }

    makeRequest({
      url: '/reviews',
      method: 'POST',
      data: payload
    })
      .then(() => {
        history.push('/');
        history.replace(`/movies/${movie_id}`);
        toast("Avaliação salva com sucesso!", {
          className: 'grey-toast',
          progressClassName: 'yellow-progress'
        })
      })
      .catch(() => {
        toast("Erro ao salva avaliação!", {
          className: 'dark-toast',
          progressClassName: 'yellow-progress'
        })
      });
  }

  return (
    <form
      className="card-base movie-details-create-review"
      onSubmit={handleSubmit(onSubmit)}
    >
      <textarea
        {...register("text", { required: "Não é permitido texto vazio!" })}
        className={`form-control input-base text-dark ${errors.text ? 'border-primary' : ''}`}
        placeholder="Deixe sua avaliação aqui"
      />
      {errors.text && (
        <div className="invalid-feedback text-primary d-block">
          {errors.text.message}
        </div>
      )}
      <button
        className="btn btn-primary"
      >
        <h3>salvar avaliação</h3>
      </button>
    </form>
  )
}

export default CreateReview;