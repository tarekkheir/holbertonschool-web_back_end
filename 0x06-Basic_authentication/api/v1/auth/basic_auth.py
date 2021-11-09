#!/usr/bin/env python3
"""Basic Authentification Class"""

from api.v1.auth.auth import Auth
import base64


class BasicAuth(Auth):
    """"empty class"""

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """return the Base64 part of the Authorization header"""

        if authorization_header and isinstance(authorization_header, str):
            basic = authorization_header.split(' ')
            i = 0
            for b in basic:
                if b == "Basic":
                    i += 1
            if i == 1:
                return basic[1]

        return None

    def decode_base64_authorization_header(self,
                                           base64_authorization_header: str)\
            -> str:
        """returns the decoded value of a
        Base64 string base64_authorization_header"""

        if base64_authorization_header and\
                isinstance(base64_authorization_header, str):
            try:
                decoded = base64.b64decode(base64_authorization_header)
                return decoded.decode("utf-8")

            except ValueError:
                return None

        return None

    def extract_user_credentials(self,
                                 decoded_base64_authorization_header: str)\
            -> (str, str):
        """returns the user email and password from the Base64 decoded value"""

        if decoded_base64_authorization_header\
                and isinstance(decoded_base64_authorization_header, str):
            decoded = decoded_base64_authorization_header.split(':')

            if len(decoded) == 2:
                return tuple(decoded)

        return (None, None)
