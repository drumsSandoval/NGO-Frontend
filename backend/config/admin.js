module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aff313f03966fa5a388c28dceb1287f7'),
  },
});
