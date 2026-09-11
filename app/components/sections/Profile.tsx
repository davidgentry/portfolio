
interface ProfileProps {
  name?: string
  title?: string
  bio?: string
  profileImage?: {
    alt?: string
    url?: string
  },
  location?: string
  email?: string
  resumeUrl?: string
  socialLinks?: {
    platform: string
    url: string
  }[]
}


export default function Profile({ name, title, bio, profileImage, location, email, resumeUrl, socialLinks }: ProfileProps) {
  return (
    <section className="profile">
      <div className="profile__inner">
        <h2 className="profile__title">Profile</h2>
        {profileImage?.url && (
          <img src={profileImage.url} alt={profileImage.alt} className="profile__image" />
        )}
        {name && <p className="profile__name">Name: {name}</p>}
        {title && <p className="profile__title">Title: {title}</p>}
        {bio && <p className="profile__bio">Bio: {bio}</p>}
        {location && <p className="profile__location">Location: {location}</p>}
        {email && <p className="profile__email">Email: {email}</p>}
        {resumeUrl && (
          <a href={resumeUrl} className="profile__resume" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        )}
        {socialLinks && socialLinks.length > 0 && (
          <div className="profile__social">
            {socialLinks.map((link) => (
              <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}



