import styles from "./card.module.css"
interface CardProps {
  /**
   * Is the theme light or dark?
   */
  theme?: "dark" | "light"

  imageUrl?: string

  /**
   * What background color to use
   */
  backgroundColor?: string

  /**
   * Orientation of the card
   */
  orientation?: "landscape" | "portrait" | "square"

  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"
  /**
   * Button contents
   */
  title: string
  caption: string
}

export function Card({
  theme = "light",
  size = "medium",
  orientation = "landscape",
  backgroundColor,
  imageUrl,
  title,
  caption,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        styles.container,
        styles[`container--${theme}`],
        styles[`container--${orientation}--${size}`],
        styles[size],
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <div className={`${styles.title}`}>{title.toUpperCase()}</div>
      <div className={`${styles.caption}`}>{caption}</div>
      {imageUrl && <img src={imageUrl} />}
    </div>
  )
}
