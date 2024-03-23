import { Link } from "@tanstack/react-router"

export default function IndexBiotech() {
  const papers = ["https://pubmed.ncbi.nlm.nih.gov/26657798/"]

  return (
    <div>
      {papers.map((paper, index) => (
        <Link
          to={paper}
          key={paper}>
          <img
            src={`/papers/${index}.png`}
            className='mx-auto'
            loading='lazy'
          />
        </Link>
      ))}
    </div>
  )
}
