import PropTypes from 'prop-types';
import { StatisticsTitle, Section, StatiisticList } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatiisticList>
        {stats.map(stat => (
          <li key={stat.id}>
            <span class=""> {stat.label}</span>
            <span class=""> {stat.percentage}</span>
          </li>
        ))}
      </StatiisticList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default Statistics;
