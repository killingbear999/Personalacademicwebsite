import { FileText, ExternalLink, Github } from 'lucide-react';

interface PublicationCardProps {
  authors: string;
  title: string;
  venue: string;
  links?: { label: string; url: string }[];
  status?: string;
}

export function PublicationCard({ authors, title, venue, links, status }: PublicationCardProps) {

  // Bold your name
  const renderAuthors = () => {
    const parts = authors.split("Zihao Wang");
    return parts.reduce<React.ReactNode[]>((acc, part, index) => {
      acc.push(part);
      if (index < parts.length - 1) {
        acc.push(<span key={index} className="font-bold">Zihao Wang</span>);
      }
      return acc;
    }, []);
  };

  // Bold selected journals
  const renderVenue = () => {
    const journalsToBold = ["Applied Energy", "Nature Health"];

    let formatted: React.ReactNode = venue;

    journalsToBold.forEach((journal) => {
      if (typeof formatted === "string" && formatted.includes(journal)) {
        const parts = formatted.split(journal);
        formatted = parts.reduce<React.ReactNode[]>((acc, part, index) => {
          acc.push(part);
          if (index < parts.length - 1) {
            acc.push(
              <span key={index} className="font-bold">
                {journal}
              </span>
            );
          }
          return acc;
        }, []);
      }
    });

    return formatted;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-green-50 rounded-lg flex-shrink-0 mt-1">
          <FileText className="text-green-600" size={20} />
        </div>

        <div className="flex-1">
          <p className="text-gray-700 text-sm mb-2">{renderAuthors()}</p>

          <h3 className="text-base text-gray-900 font-normal mb-2 leading-snug">
            "{title}"
          </h3>

          <p className="text-sm text-gray-600 mb-2 italic">
            {renderVenue()}
          </p>

          {status && (
            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded mb-3">
              {status}
            </span>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {link.label.toLowerCase().includes("github") ? (
                    <Github size={14} />
                  ) : (
                    <ExternalLink size={14} />
                  )}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
