/* eslint-disable camelcase */
import React from 'react'
import styles from './tutorial.module.scss'
import buttons from '@/styles/Button.module.scss'
import LLVMcfg from '../llvmcfg/llvmcfg'
import { CodeBlock, tomorrow } from 'react-code-blocks'
import { code } from './codeblock'
import Filter1Icon from '@mui/icons-material/Filter1'
import Filter2Icon from '@mui/icons-material/Filter2'
import Filter3Icon from '@mui/icons-material/Filter3'
import Filter4Icon from '@mui/icons-material/Filter4'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import SouthIcon from '@mui/icons-material/South'
import tutorial1 from '@/images/tutorial1.png'
import tutorial2 from '@/images/tutorial2.png'

function Example() {
  const handleSubmit = () => {
    const x = document.getElementById('tutorial_submit__3J9w5')
    if (x) {
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    }
  }
  return (
    <section className={styles.tutorial}>
      <section id={styles.title}>
        <h3>Tutorial 🎮</h3>
        <span>
          <i>LLVM-FLOW</i>&nbsp; visualizes 'LLVM IR CFG' interactively and allows
          you to compare optimization results at a glance. <br></br>
          Just scroll down <Filter1Icon /> ~ <Filter4Icon /> and discover
          various features of <i>LLVM-FLOW</i> for yourself!
        </span>
      </section>
      <section id={styles.basic}>
        <h4>
          <Filter1Icon /> Prepare source code
        </h4>
        <span>
          Here's an example of simple C source code.
          <br></br>We'll compile and optimize this source code by{' '}
          <a href="https://llvm.org/" target="_blank">
            LLVM
          </a>
          , and compare the CFG before and after optimization.
        </span>
        <br></br>
        <br></br>
        <code>example.c</code>
        <CodeBlock
          text={code['c']}
          language={'c'}
          showLineNumbers={false}
          theme={tomorrow}
          id={styles.codeblock}
        />
      </section>
      <section id={styles.basic}>
        <h4>
          <Filter2Icon /> Upload source code with pass option
        </h4>
        <span>
          Simply do the following <b>3</b> things on{' '}
          <a href="https://llvmflow.kc-ml2.com/uploadC" target="_blank">
            start page
          </a>{' '}
          .
        </span>
        <img src={tutorial1} />
        <span>
          <b>1.</b> Fill in your name/nickname. (The user name will be used to
          query the upload result.) <br></br>
          <b>2.</b> Upload your source code. (<code>.c</code>, <code>.cpp</code>
          ,<code>.ll</code> only)
          <br></br>
          <b>3.</b> Fill in LLVM passes for optimization.
          <br></br>
          <br></br>
          If you're done with all three, press the submit button! That's all!
          <br></br>
          <button className={buttons.mini} onClick={handleSubmit}>
            Submit
          </button>
          <div id={styles.submit} style={{ display: 'none' }}>
            Check the results below <Filter3Icon />
            <SouthIcon />
          </div>
        </span>
      </section>
      <section id={styles.basic}>
        <h4>
          <Filter3Icon /> Compare the CFG interactively
        </h4>
        <span>
          This is the actual result of compiling and optimizing the above source
          code. <br></br>
          You can do following things : <br></br>- detect same node(basic block)
          between CFGs by clicking the node with purple border,
          <br></br>- move the node and edge freely, <br></br>- switch the
          mode(origin/simple) of CFG,<br></br>- find the target&source node of
          the edge,<br></br>- resize the screen,<br></br>- change the direction
          of CFG, <br></br>- and zoom in/ zoom out <br></br>
          <br></br>
          Click the <b>'Open Guide'</b> button and find out more features that
          LLVM-FLOW can do !
        </span>
      </section>
      <LLVMcfg />
      <section id={styles.basic}>
        <h4>
          <Filter4Icon /> Check all your results
        </h4>
        <span>
          The uploaded results are organized in a table format on{' '}
          <a href="https://llvmflow.kc-ml2.com/board" target="_blank">
            board page
          </a>
          . <br></br> You can search for your results by 'User Name' you used
          when uploading.
        </span>
        <img src={tutorial2} />
        <span>
          <br></br>
          <BookmarksIcon /> Please visit the{' '}
          <a href="https://kc-ml2.gitbook.io/llvm-flow/" target="_blank">
            DOCS page
          </a>{' '}
          to learn more about LLVM-FLOW!
        </span>
      </section>
    </section>
  )
}

export default Example as React.ComponentType
