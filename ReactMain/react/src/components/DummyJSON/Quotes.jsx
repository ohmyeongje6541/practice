import { useEffect, useState } from "react";
import { quoteAPI } from "../../api/quotes";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const quotes = await quoteAPI.getQuotes(); 
      setQuotes(quotes); 
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {quotes.map((quote) => ( 
          <li key={quote.id}>{quote.quote}</li> 
        ))}
      </ul>
    </div>
  );
}
