import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';

type Props = {
  text: string;
}

const ButtonIcon = ({ text }: Props) => {
  return (
    <button className="btn btn-primary default-button">
      <div className="btn-icon-text">
        <h3>{text}</h3>
      </div>
      <div className="btn-icon-content">
        <ArrowIcon />
      </div>
    </button>
  )
}

export default ButtonIcon;