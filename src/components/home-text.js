import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function HomeText() {
  return (

    <StaticQuery
        query={graphql`
        {

            
            markdownRemark(frontmatter: {slug: {eq: "home"}}) {
                html
            }
            

        }
        `}
        render={data => (
            //<div>{data.markdownRemark.html}</div>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} />
        )}
       // render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  
                
    />
  )
}