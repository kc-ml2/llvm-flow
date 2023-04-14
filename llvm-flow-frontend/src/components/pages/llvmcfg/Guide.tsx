import drag from '@/gif/drag.gif'
import edge from '@/gif/edge.gif'
import resize from '@/gif/resize.gif'
import direction from '@/gif/direction.gif'
import zoom from '@/gif/zoom.gif'
import click from '@/gif/click.gif'
import origin from '@/gif/origin.gif'
import db from '@/gif/db.gif'
import styles from './Guide.module.scss'

const Guide = () => {
  return (
    <section className={styles.guide}>
      {/* 1. */}
      <h4>1. Detect same Basic Block between IR modules</h4>
      <p>
        When you click a node with a purple border, the background color of the
        node with the same basic block changes to purple. Click again to return
        the background color.
        <img src={click}></img>
      </p>
      {/* 2. */}
      <h4>2. Switch the mode of CFG</h4>
      <p>
        You can change the mode by simply pressing the switch in the upper right
        corner.
        <img src={origin}></img>
      </p>
      {/* 3. */}
      <h4>3. Switch modes only for certain nodes</h4>
      <p>
        If you don't want to change the mode of the entire CFG but want to see
        more about the content of a specific node, just double-click it.
        Double-click again to return the mode of node.
        <img src={db}></img>
      </p>
      {/* 4. */}
      <h4>4. Move the node</h4>
      <p>
        By dragging the node, you can freely change its position.
        <img src={drag}></img>
      </p>
      {/* 5. */}
      <h4>5. Find the target&source node of the edge</h4>
      <p>
        You can find the target and source nodes of the edge by clicking or
        hovering over it.
        <img src={edge}></img>
      </p>
      {/* 6. */}
      <h4>6. Resize the `div`</h4>
      <p>
        You can resize the div by holding and moving the arrow button at the
        bottom of both.
        <img src={resize}></img>
      </p>
      {/* 7. */}
      <h4>7. Change the direction of CFG</h4>
      <p>
        You can change the direction of CFG by clicking the horizontal/vertical
        buttons.
        <img src={direction}></img>
      </p>
      {/* 8. */}
      <h4>8. Zoom in / Zoom out</h4>
      <p>
        Place the mouse pointer on the position you want to zoom in and out.
        <img src={zoom}></img>
      </p>
    </section>
  )
}

export default Guide
