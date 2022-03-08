import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: 'Lets hit the beach!',
		iconName: 'sun',
	},
	winter: {
		text: 'Burr, it is chilly',
		iconName: 'snowflake',
	},
};

const getSeason = (lat, month) => {
	if (month < 2 && month > 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	// const text =
	// 	season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
	// const icon = season === 'Winter' ? 'snowflake' : 'sun';
	// const { text, iconName } = seasonConfig[season];
	// ===
	// const text = season.text
	// const iconName = season.iconName
	// so its literally just assigning
	const { text, iconName } = seasonConfig[season];
	return (
		//`` is template literal you do things like interpolation (adding something of diffrent nature)
		<div className={`${season} season-display`}>
			<i className={`${iconName} massive icon icon-left`} />
			<h1>{text}</h1>
			<i className={`${iconName} massive icon icon-right`} />
		</div>
	);
};

export default SeasonDisplay;
