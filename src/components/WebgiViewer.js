import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    // timeout,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    // DiamondPlugin,
    // FrameFadePlugin,
    // GLTFAnimationPlugin,
    // GroundPlugin,
    BloomPlugin,
    // TemporalAAPlugin,
    // AnisotropyPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    // ITexture, TweakpaneUiPlugin, AssetManagerBasicPopupPlugin, CanvasSnipperPlugin,

    // IViewerPlugin,
    mobileAndTabletCheck

    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import gsap from "gsap";
import {scrollTrigger} from "gsap/all"

function WebgiViewer() {
    const canvasRef = useRef(null);
    return (
        <div id="webgi-canvas-container">
            {/* <canvas id="webgi-canvas" ref={ } /> */}
        </div>
    );
}

export default WebgiViewer;