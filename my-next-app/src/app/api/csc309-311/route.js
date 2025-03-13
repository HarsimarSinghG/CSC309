/* eslint-disable @typescript-eslint/no-unused-vars */

export async function GET(req) {
  const utorid = 'harsima1'; // Replace with your actual UTorID
    const htmlResponse = `
        <div id="auto-tester">
              Hi. I am ${utorid}, and I have learned how to develop a full-stack web app
                    and deploy it!
                        </div>
                          `;

                              return new Response(htmlResponse, {
                                  headers: {
                                        'Content-Type': 'text/html',
                                            },
                                              });
                                              }