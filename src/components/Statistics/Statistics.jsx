import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">
        {stats.map(stat => (
          <li class="" key={stat.id}>
            <span class="">{stat.label}</span>
            <span class="">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default Statistics;
