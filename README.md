Create a file named ".env" and fill it with the enviroment variables listed in the ".env.example" file.

Once cloned, on the top of this repo, type in the terminal:
NPM INSTALL

To rise the server, type:
NPM START

At this point, you can send a request to:
http://localhost:{{PORT}}/flights/{{flightNumber}}/passengers
And it will give you the flight details among with a list of passengers

NOTE: It is ordered from the smallest seat id to the greatest, but the last ones are null, because the seat assign process has not been finished.

To run the server with nodemon:
NPM RUN DEV

En mi lengua:
Agradezco a Bsale por permitirme realizar esta prueba tecnica, que a pesar de no haber sido terminada, me dió con que luchar y ganar en reiteradas ocasiones.
