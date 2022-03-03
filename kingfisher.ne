# Optional whitspace
_
    -> %WS:*

# Mandatory whitspace
__
    -> %WS:+

# Assigning a value to a dash
dash_assign
    -> %dashnew _ %assign _ dash_value

# Possible values of a dash
dash_value
    -> %string
    |  %number
    |  %dashid