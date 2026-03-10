import { Presentation, MapPin } from 'lucide-react';

interface PresentationCardProps {
  title: string;
  authors: string;
  conference: string;
  location: string;
  year: string;
  type: string;
  note?: string;
}

export function PresentationCard({ 
  title, 
  authors, 
  conference, 
  location, 
  year, 
  type,
  note 
}: PresentationCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-indigo-50 rounded-lg flex-shrink-0 mt-1">
          <Presentation className="text-indigo-600" size={20} />
        </div>
        <div className="flex-1">
          <p className="text-gray-700 text-sm mb-2">{authors}</p>
          <h3 className="text-gray-900 mb-2 leading-snug">
            "{title}"
          </h3>
          <p className="text-sm text-gray-600 mb-2 italic">{conference}</p>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <MapPin size={14} />
            <span>{location}, {year}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {type}
            </span>
            {note && (
              <span className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                {note}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
