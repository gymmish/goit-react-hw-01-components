import PropTypes from 'prop-types';
import { StatisticsTitle, Section, StatisticList } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticList>
        {stats.map(stat => (
          <li style={{ backgroundColor: getRandomHexColor() }} key={stat.id}>
            <span class=""> {stat.label}</span>
            <span class=""> {stat.percentage}</span>
          </li>
        ))}
      </StatisticList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default Statistics;
