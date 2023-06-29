import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  List,
  Label,
  Percent,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {{ title } && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <Label>{label}</Label>
              <Percent>{percentage}%</Percent>
            </li>
          );
        })}
      </List>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
