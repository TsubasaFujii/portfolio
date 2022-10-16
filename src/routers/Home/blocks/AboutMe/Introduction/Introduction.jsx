import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { projectsData, selfIntroduction } from '../../../../../static/content.js';

import { Image, Heading, Text, GroupedIcons } from '../../../../../components';
import { ContentWrapper } from './styled';

import profile from '../../../../../assets/images/profile.webp';

const TOOLS = projectsData
    .reduce((result, current) => result.concat(current.tools), [])
    .filter((tool, i, arr) => arr.indexOf(tool) === i);

export default function Introduction(props) {
    const { isVisible } = props;

    return (
        <ContentWrapper>
            <Image isVisible={isVisible} src={profile} alt='my profile' clipped />
            <motion.div initial='hidden' className='introduction'>
                <Heading size={4}>{selfIntroduction.subHeading}</Heading>
                {
                    selfIntroduction.body.map((paragraph, index) =>
                        <Text key={index}>{paragraph}</Text>)
                }
            </motion.div>
            <GroupedIcons names={TOOLS} />
        </ContentWrapper>
    )
}

Introduction.propTypes = {
    isVisible: PropTypes.bool
};