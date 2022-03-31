import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import {
  Container,
  Intro,
  Subtitle,
  Flex,
  StoryContainer,
  Text,
  Link,
  TextNote,
  GraphicsContainer,
  GraphicContainer,
  GraphicTitle,
  Tools,
} from './styles'
import { stories, graphics } from '../work_data'
import CloserLook from '../closer_look'

function App() {
  const [showCloserLook, setShowCloserLook] = useState(false)
  const [activeGraphic, setActiveGraphic] = useState()
  const introText = "Hi, I'm Kati! I'm a data visualization reporter and developer at the Associated Press."
  const aboutMeText = "I'm a Mississippi native, and like many fine folks, I get excited about beautiful maps (particularly ones with shaded relief), clever visuals, and the kinds of interactive graphics that add layers to our understanding of the world around us. I’m picky about biscuits and hushpuppies, enthusiastic about good non-fiction, and eager to cycle and walk places."
  const toolkit = ['JS', 'React', 'D3', 'Illustrator', 'Photoshop', 'QGIS', 'R', 'Git', 'HTML/CSS']

  const selectCloserLook = mapID => {
    setShowCloserLook(true)
    setActiveGraphic(mapID)
  }


  const ref = useRef()

  return (
    <div>
      {showCloserLook 
        ? <CloserLook setShowCloserLook={setShowCloserLook} activeGraphic={activeGraphic} />
        : (<Container>
            <Intro>
              {introText}
            </Intro>
            <Flex>
              <Subtitle line>⚡️ Here are some visuals-driven stories I've worked on:</Subtitle>
              <StoryContainer>
                {stories
                  .sort((st1, st2) => st2.year - st1.year)
                  .map((story, i) => {
                    return (
                      <Text>
                        <Link key={i} href={story.link}>{story.title}</Link> <TextNote>{story.org}/{story.year}</TextNote>
                      </Text>
                    )
                })}
              </StoryContainer>
              <Subtitle line>🗺 Here are some interactives and maps I've worked on:</Subtitle>
              <GraphicsContainer>
                {graphics
                  .map((graphic, i) => {
                    return (
                      <GraphicContainer onClick={() => selectCloserLook(graphic.id)}>
                        <img style={{ width: '100%' }} src={graphic.mainImage} />
                        <GraphicTitle>{graphic.title}</GraphicTitle>
                      </GraphicContainer>
                    )
                  })
                }
              </GraphicsContainer>
              <Subtitle line>🛠 Toolkit</Subtitle>
              <Tools>
                {toolkit.map((tool, i) => (<Text>{tool}</Text>))}
              </Tools>
              <Subtitle line>👋🏻 About me:</Subtitle>
              <Text>{aboutMeText}</Text>
            </Flex>
            <Text>(Find me on <Link href='https://twitter.com/kt_prry'>Twitter</Link>)</Text>
          </Container>)
      }
    </div>
  )
}

export default App
