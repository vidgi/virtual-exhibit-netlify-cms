import React from 'react'
import { useRef, useState } from 'react'
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { ScrollControls, Scroll, useScroll, useCursor, Html } from '@react-three/drei'
import Sidebar from '../components/Sidebar'

import { Canvas ,useFrame, useThree} from "@react-three/fiber"
import { Suspense } from "react";
import Scene from "../components/Scene";

import * as THREE from 'three'
import { Text } from '../packages/Text'

// eslint-disable-next-line


// function Caption({ style, ...props }) {
//   const ref = useRef()
//   const data = useScroll()
//   useFrame(() => {
//     // This is a dom element, but we can use useFrame here still since we're inside the canvas
//     if (data.delta > data.eps) ref.current.style.transform = `translate3d(${data.range(0, 1 / 3) * 100}%,0,0)`
//   })
//   return (
//     <h1 ref={ref} style={{ padding: '1em', color: 'hotpink', fontSize: '4em', width: '15ch', maxWidth: '80%', ...style }} {...props}>
//       this is html inside the scroll container 👋
//     </h1>
//   )
// }

// function Content2(props) {
//   const { viewport } = useThree()
//   return (
//     <group {...props}>
//       <Text position={[1, 0, 0]}>hello</Text>
//       <Plane color="aquamarine" scale={8} position={[-5, 0, -2.5]} />
//       <Plane factor={-2} color="#ffff70" scale={5} position={[viewport.width / 2, -viewport.height / 10, -5]} />
//       <Stripe position={[0, -viewport.height / 2, -3]} />
//       <Text position={[-1.5, -viewport.height, 0]}>world</Text>
//       <Text fontSize={10} position={[-3, -1, -2]}>
//         1
//       </Text>
//       <FadingText position={[3, -viewport.height - 1, -2]}>7</FadingText>
//       <Text fontSize={1} position={[0, -viewport.height * 2, 2.5]}>
//         end.
//       </Text>
//       <Plane factor={0} color="#ff6080" scale={20} position={[-viewport.width / 3, -20, -10]}>
//         <Html transform style={{ maxWidth: '15ch', fontSize: '1.3px' }}>
//           Also HTML, but bound to the mesh ⚛️
//         </Html>
//       </Plane>
//       <Stripe factor={-1} color="lightblue" position={[0, -viewport.height * 1.25, 0]} />
//       <Torus factor={-2} scale={0.5} color="#4969ff" position={[viewport.width / 3.5, 1, -0.1]} />
//       <Torus factor={1} scale={1} color="aquamarine" position={[0, -viewport.height * 2, 0]} />
//     </group>
//   )
// }

// function Plane({ children, color = 'white', factor = 1, ...props }) {
//   const ref = useRef()
//   const data = useScroll()
//   useFrame(() => (ref.current.rotation.z = (data.offset * factor * Math.PI) / 2))
//   return (
//     <mesh ref={ref} {...props}>
//       <planeGeometry />
//       <meshBasicMaterial color={color} />
//       {children}
//     </mesh>
//   )
// }

// function Stripe({ color = 'white', factor = 1, ...props }) {
//   const ref = useRef()
//   const data = useScroll()
//   useFrame((state) => (ref.current.position.x = data.offset * factor * state.viewport.width))
//   return (
//     <mesh ref={ref} scale={[15, 1, 1]} {...props}>
//       <planeGeometry />
//       <meshBasicMaterial color={color} />
//     </mesh>
//   )
// }

// function Torus({ children, color = 'white', factor = 1, ...props }) {
//   const ref = useRef()
//   const data = useScroll()
//   useFrame(() => (ref.current.rotation.z = (data.offset * factor * Math.PI) / 2))
//   return (
//     <mesh ref={ref} {...props}>
//       <torusGeometry args={[4, 0.75, 2, 64, 5]} />
//       <meshBasicMaterial color={color} />
//       {children}
//     </mesh>
//   )
// }

// function Button() {
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   const { viewport, camera } = useThree()
//   const ref = useRef()
//   const data = useScroll()
//   useCursor(hovered)
//   useFrame((state) => {
//     ref.current.scale.setScalar(1 + data.delta * 25)
//     camera.position.y = THREE.MathUtils.lerp(camera.position.y, clicked ? -2 : 0, 0.1)
//     camera.fov = THREE.MathUtils.lerp(camera.fov, clicked ? 100 : 75, 0.1)
//     camera.lookAt(0, 0, 0)
//     camera.updateProjectionMatrix()
//   })
//   return (
//     <mesh
//       ref={ref}
//       position={[-viewport.width / 3.5, viewport.height / 3.5, 1]}
//       onPointerOver={() => hover(true)}
//       onPointerOut={() => hover(false)}
//       onClick={() => click(!clicked)}>
//       <circleGeometry args={[0.4, 64, 64]} />
//       <meshBasicMaterial color={hovered ? '#ffff10' : '#ff2070'} />
//     </mesh>
//   )
// }

// function FadingText(props) {
//   const ref = useRef()
//   const data = useScroll()
//   useFrame(() => {
//     // Make it fade in between 1/3 and 2/3 + some padding
//     const r = data.range(1 / 3 - 0.3, 1 / 3 + 0.3)
//     // Super fast frustum culling
//     ref.current.visible = data.visible(1 / 3 - 0.3, 1 / 3 + 0.3)
//     ref.current.rotation.y = (r * Math.PI) / 4
//     // Interpolates the range to 0-1-0
//     ref.current.material.opacity = Math.sin(r * Math.PI)
//   })
//   return (
//     <Text ref={ref} fontSize={10} {...props} frustumCulled={false}>
//       7
//     </Text>
//   )
// }


export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (

        <div className="columns">
          <div className="column">
            <div className="section">
              <div style={{ position: "relative", width: 0.95*window.innerWidth, height: 0.8*window.innerHeight }}>

<Canvas>
      <ScrollControls damping={5} pages={1.5} distance={5}>
        {/* <Button /> */}
        <Scroll>
        <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Suspense fallback={null}>
              <Scene position={[0, 0, 0]}/>
              
                  {/* <Box position={[0, 0, 0]} /> */}

           </Suspense>
        </Scroll>
        <Scroll html>
        <h2 className="title is-size-3 has-text-weight-semibold">
                {title}
              </h2>
        <PageContent className="content" content={content} />

          {/* <Caption /> */}
        </Scroll>
      </ScrollControls>
    </Canvas>

  
      </div>
            </div>
          </div>
          </div>
         
          
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
