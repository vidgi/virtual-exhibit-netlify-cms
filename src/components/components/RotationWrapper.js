import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

export default function RotationWrapper(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const group = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // group.current.scale.x = 1.05-props.scroll.current*.25
    // group.current.scale.y = 1.05-props.scroll.current*.25
    // group.current.scale.z = 1.05-props.scroll.current*.25

    group.current.rotation.x = THREE.MathUtils.degToRad((props.scroll.current * 360) / 2)
    group.current.rotation.y = THREE.MathUtils.degToRad((props.scroll.current * 360+50) / 1)
    // group.current.rotation.z = THREE.MathUtils.degToRad((props.scroll.current * -360+50) / 4)

  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
          {props.children}
      </group>
    </group>
  )
}
