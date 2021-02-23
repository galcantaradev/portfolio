import Image from 'next/image';
import styled from 'styled-components';

import { SectionTitle } from './SectionTitle';
import { IProject } from '../types';

interface Props {
  project: IProject;
}

const Article = styled.article`
  a {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.3rem;
    min-width: 18rem;
    padding: 1rem;

    p {
      margin: 0;
    }

    :hover {
      cursor: pointer;

      h1 {
        color: ${props => props.theme.green};
      }
    }
  }
`;

export const ProjectItem = (props: Props) => {
  const { project } = props;

  return (
    <Article>
      <a
        href={project.link}
        target="_blank"
        rel="noopener"
        data-testid={project.name}
        aria-label={project.name}
      >
        <Image
          src={project.imagePath}
          objectFit="contain"
          height="100"
          width="200"
          alt={project.name}
        />
        <SectionTitle>{project.name}</SectionTitle>
      </a>
    </Article>
  );
};
