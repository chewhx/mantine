import { storiesOf } from '@storybook/react';
import { attachDemos } from '@mantine/ds';
import * as demos from '../demos';

const stories = storiesOf('@mantine/core/Anchor/demos', module);

attachDemos(stories, demos);
