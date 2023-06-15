import PropTypes from 'prop-types';
import { motion } from 'framer-motion';



import { projectsData, selfIntroduction } from '@/static/content';
import { ContentWrapper } from './styled';

import { GroupedIcons, Heading, Image, Text } from '@/components/common';

const TOOLS = projectsData
    .reduce((result, { tools }): IconName[] => result.concat(tools), [] as IconName[])
    .filter((tool, i, arr) => arr.indexOf(tool) === i);

type CustomProps = {
    isVisible: boolean;
}

export default function Introduction(props: CustomProps) {
    const { isVisible } = props;

    return (
        <ContentWrapper>
            <Image isVisible={isVisible} src='/assets/images/profile.webp' alt='my profile' clipped />
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