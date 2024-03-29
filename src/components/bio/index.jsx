import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
              />
              <div className="author-name">
                <span className="author-name-prefix">Written by</span>
                <Link to={'/about'} className="author-name-content">
                  <span>Garima Singh</span>
                </Link>
                <div className="author-introduction">
                  I explain with words and code.
                </div>
                <p className="author-socials">
                  {social.github && (
                    <a href={`https://github.com/garimasingh128`}>GitHub</a>
                  )}
                  {social.medium && (
                    <a href={`https://medium.com/@garingh128`}>Medium</a>
                  )}
                  {social.twitter && (
                    <a href={`https://twitter.com/GarimaS95581152`}>Twitter</a>
                  )}

                  {social.linkedin && (
                    <a
                      href={`https://www.linkedin.com/in/garima-singh-34042a177/`}
                    >
                      LinkedIn
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/me.jpeg/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
          linkedin
        }
      }
    }
  }
`

export default Bio
