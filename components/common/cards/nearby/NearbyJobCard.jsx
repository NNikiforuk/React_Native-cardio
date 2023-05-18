import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { images } from "../../../../constants";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={handleNavigate}>
			<TouchableOpacity style={styles.logoContainer}>
				<Image
					source={{ uri: images.randomImage }}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>
			<View style={styles.textContainer}>
				<Text style={styles.jobName}>{job.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default NearbyJobCard;
